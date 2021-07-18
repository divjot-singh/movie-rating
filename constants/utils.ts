export const DELAY = (mls:number, callback?:Function) => {
	if(callback){
		setTimeout(callback, mls);
	}
	return new Promise(resolve => setTimeout(resolve, mls));
}
