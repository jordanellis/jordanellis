import React, { useEffect, useState } from "react";

export default function Loading(props) {
	const {loading, initial, max, component} = props;
	const [loadingValue, setLoadingValue] = useState(initial);
	const [isLoading, setIsLoading] = useState(loading);

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

	const renderComponent = () => {
		if (isLoading) {
			return (
				<section className="loading">
					Loading...
					<progress className="nes-progress is-primary" value={loadingValue} max={max}></progress>
				</section>
			);
		} else {
			return (component);
		}
	}

	return (
		<div>
		{isLoading ?
			<section className="loading">
				Loading...
				<progress className="nes-progress is-primary" value={loadingValue} max={max}></progress>
			</section>
		:
			component
		}
		</div>
	);
}