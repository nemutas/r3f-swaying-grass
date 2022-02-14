import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { TCanvas } from './three/TCanvas';

export const App: VFC = () => {
	return (
		<div className={styles.container}>
			<TCanvas />
		</div>
	)
}

const styles = {
	container: css`
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	`
}
