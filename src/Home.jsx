import { useState, useEffect } from 'react';

import getTransactionData from './utils/transactionData';
import { getAtomicAssetData } from './utils/queryData';

import './Home.css'

function Home() {
	const [assetsData, setAssetsData] = useState([]);
	const [atomicAssetData, setAtomicAssetData] = useState([]);

	const images = assetsData?.map((asset) => {
		return (
			<div className='asset-boundary' key={asset}>
				<a href={`https://arweave.net/${asset}`} target='_blank' rel="noreferrer" >
					<img
						src={`https://arweave.net/${asset}`}
						alt={asset}
						width={300}
						height={300}
					/>
				</a>
				<a href={`https://viewblock.io/arweave/tx/${asset}`} target='_blank' rel="noreferrer" >
					<h3>{atomicAssetData[asset]?.Title}</h3>
				</a>
			</div>
		);
	}
	)

	useEffect(() => {
		async function getData() {
			const data = await getTransactionData("chGa5cCOQRwjiDOABYQseAPesN0-qdxBTozDpNhl2nc");
			console.log("This is the data", data);
			setAssetsData(data.items);
			await getAtomicAsset(data.items);
		}
		async function getAtomicAsset(txIds) {
			console.log("This is the txIds", txIds);
			const data = await getAtomicAssetData(txIds);
			console.log("This is the data for atomic", data);
			setAtomicAssetData(data);
		}
		getData();
	}, []);

	return (
		<div className='intro'>
			<h1>
				Welcome to the Arweave For Everyone
			</h1>
			<h2>Atomic Asset Collection</h2>
			<div className='image-container'>
				{images}
			</div>
		</div>
	);
}

export default Home;
