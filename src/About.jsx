import { useState, useEffect } from 'react';

import './About.css'
import { getQueryData } from './utils/queryData';

function About() {
	function removeHyphensAndCapitalizeNext(str) {
		// Split the string into words using hyphen as the delimiter
		const words = str.split('-');

		// Capitalize the first letter of each word and join them back with no space
		const result = words.map(word => {
			if (word.length > 0) {
				// Capitalize the first character and append the rest of the word
				return word.charAt(0).toUpperCase() + word.slice(1);
			}
			return word; // If the word is empty, keep it as is
		}).join('');

		return result;
	}
	const [tags, setTags] = useState([]);
	useEffect(() => {
		async function queryGQLTxn() {
			const response = await getQueryData("chGa5cCOQRwjiDOABYQseAPesN0-qdxBTozDpNhl2nc")
			console.log("This is the result of the query", response);
			const tags = response?.tags
			const outputData = {};
			for (const item of tags)
				outputData[removeHyphensAndCapitalizeNext(item.name)] = item.value;
			console.log("This is the tags", tags);
			console.log("This is the outputData", outputData);
			setTags(outputData);
		}
		queryGQLTxn();
	}, []);
	return (
		<div className="container">
			<img
				src={`https://arweave.net/${tags?.Thumbnail}`}
				alt={tags?.Image}
			/>
			<h1>{tags?.Name}</h1>
			<p>{tags?.Description}</p>
			<p>
				Creator: <a
					href={`https://viewblock.io/arweave/address/${tags?.Creator}`}
					rel="noreferrer"
					target="_blank"
				>
					{tags?.Creator}
				</a>
			</p>
			<p>
				Contract Source: <a
					href={`https://viewblock.io/arweave/tx/${tags?.ContractSrc}`}
					rel="noreferrer"
					target="_blank"
				>
					{tags?.ContractSrc}
				</a>
			</p>
			<p>Data Protocol: {tags?.DataProtocol}</p>
			<p>
				License: <a href={tags?.License} target="_blank">{tags?.License}</a>
			</p>
		</div>
	);
}

export default About;