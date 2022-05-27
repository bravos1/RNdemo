import React from 'react';
import {NativeBaseProvider, View} from 'native-base';

import {store} from './store/store';
import {Provider} from 'react-redux';

import {CustomTheme} from './theme';
import * as Demo from './Demo';

export default function App () {
	return (
		<NativeBaseProvider theme={CustomTheme}>
			<Provider store={store}>
				<View style={{flex:1,backgroundColor:'#24292e'}}>
					<Demo.video />
				</View>
			</Provider>
		</NativeBaseProvider>
	);
}
