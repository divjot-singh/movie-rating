import styles from '../../styles/Loader.module.scss';
import {default as ReactLoader} from "react-loader-spinner";


export interface LoaderData{
	show:boolean,
	child:JSX.Element | string
	className?:string
}

interface PageProps{
	loaderData:LoaderData
}

const Loader = ({loaderData}:PageProps):JSX.Element | null => {
	if(loaderData.show){
		return <div className={`${styles.loader} ${loaderData.className || ''}`}>
			<ReactLoader type="Puff"
				color="#00BFFF"
				height={100}
				width={100}
				
			/>
			<div className={styles.child}>{loaderData.child}</div>
		</div>
	} else return null;
}

export default Loader;