
import { useCallback, useEffect } from 'react';
import { DELAY } from '../../constants/utils';
import useCommonComponents, { CommonComponentsContextReturnValue } from '../../state-management/commonComponentsContext';
import styles from '../../styles/Snackbar.module.scss'

export enum SnackbarTypes{
	success='success',
	error='error',
	info = 'info'
}

export interface SnackbarData{
	show:boolean,
	child:string | JSX.Element
	type:SnackbarTypes 
}

interface PageProps{
	snackbarData:SnackbarData
}

const Snackbar = ({snackbarData}:PageProps):JSX.Element | null => {
	const commonComponentsState:CommonComponentsContextReturnValue = useCommonComponents();
	
	const handleHideSnackbar = async () => {
		await DELAY(3000);
		commonComponentsState.hideSnackbar();
	}
	const handleHideSnackbarCallback = useCallback(handleHideSnackbar, [commonComponentsState])
	useEffect(() => {
		if(snackbarData.show){
			handleHideSnackbarCallback();
		}
	}, [snackbarData.show, handleHideSnackbarCallback])
	
	if(snackbarData.show){
		return <div className={styles.snackbarContainer}>
				<div className={`${styles.snackbar} ${styles[snackbarData.type]}`}>
					{snackbarData.child}
				</div>
			  </div>
	} else return null;
}

export default Snackbar;