import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Button from './components/Button';
export default function App() {
	function SvgTop() {
		return (
			<Svg
				width={400}
				height={328}
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<Path
					d='M0 0h400v288.783s-400 88.239-400 0V0Z'
					fill='#1E3528'
				/>
			</Svg>
		);
	}

	return (
		<View style={styles.mainContainer}>
			<View style={styles.container}>
				<View style={styles.svg}>
					<SvgTop style={styles.svgTop} />
					<Image
						style={styles.img}
						source={require('./images/logo-removebg-preview.png')}
					/>
				</View>

				<Text style={styles.titulo}>Hola</Text>
				<Text style={styles.subTitulo}>Inicia sesión en tu cuenta</Text>
				<TextInput
					style={styles.input}
					placeholder='Correo electrónico'
					placeholderTextColor={'#949494'}
				/>
				<TextInput
					style={styles.input}
					placeholder='Contraseña'
					secureTextEntry={true}
					placeholderTextColor={'#949494'}
				/>
				<StatusBar style='auto' />
				<Button text='Iniciar sesión' />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#f1f1f1',
		flex: 1,
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	titulo: {
		fontSize: 70,
		color: '#34434D',
		fontWeight: 'bold',
		justifyContent: 'flex-start',
	},
	subTitulo: {
		fontSize: 20,
		color: 'gray',
		justifyContent: 'flex-start',
	},
	input: {
		width: '80%',
		paddingVertical: 10,
		paddingStart: 20, // Sirve para que el texto empiece a la izquierda con 20px de separación
		marginTop: 20,
		borderRadius: 25,
		backgroundColor: '#fff',
	},
	svg: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	svgTop: {
		flex: 2,
	},
	img: {
		position: 'absolute',
		flexDirection: 'row',
		bottom: 0,
	},
});
