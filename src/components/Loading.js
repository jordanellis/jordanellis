import React, { useEffect, useState } from "react";

export default function Loading(props) {
	const {initial, max} = props;
	const [loadingValue, setLoadingValue] = useState(initial);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
	    const timer = setInterval(() => {
	    	const newValue = loadingValue+5;
	    	console.log(loadingValue);
	    	if (loadingValue === max) {
	    		setIsLoading(false);
	    		clearInterval(timer);
	    	} else if (newValue > max) {
	    		setLoadingValue(max);
	    	} else {
	    		setLoadingValue(newValue);
	    	}
	    }, 100);
	    return () => clearInterval(timer);
	  }, [loadingValue, max]);

	return (
		<div>
		{isLoading &&
			<section className="loading">
				Loading...
				<progress className="nes-progress is-primary" value={loadingValue} max={max}></progress>
			</section>
		}
		</div>
	);
}