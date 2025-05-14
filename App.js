import * as React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Provider as PaperProvider, Button, TextInput } from 'react-native-paper';

export default function App() {
  const [display, setDisplay] = React.useState('');
  const [result, setResult] = React.useState('');

  const handlePress = (value) => setDisplay(display + value);
  const handleClear = () => {
    setDisplay('');
    setResult('');
  };
  const handleEqual = () => {
    try {
      const evalResult = eval(display);
      setResult(evalResult.toString());
    } catch (error) {
      setResult('Erro');
    }
  };

  const renderButton = (label, onPress, mode = 'contained') => (
    <Button style={styles.button} mode={mode} onPress={onPress}>
      {label}
    </Button>
  );

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          mode="outlined"
          label="Expressão"
          value={display}
          style={styles.input}
          editable={false}
        />
        <Text style={styles.result}>Resultado: {result}</Text>

        <SafeAreaView style={styles.row}>
          {renderButton('7', () => handlePress('7'))}
          {renderButton('8', () => handlePress('8'))}
          {renderButton('9', () => handlePress('9'))}
          {renderButton('/', () => handlePress('/'), 'outlined')}
        </SafeAreaView>
        <SafeAreaView style={styles.row}>
          {renderButton('4', () => handlePress('4'))}
          {renderButton('5', () => handlePress('5'))}
          {renderButton('6', () => handlePress('6'))}
          {renderButton('*', () => handlePress('*'), 'outlined')}
        </SafeAreaView>
        <SafeAreaView style={styles.row}>
          {renderButton('1', () => handlePress('1'))}
          {renderButton('2', () => handlePress('2'))}
          {renderButton('3', () => handlePress('3'))}
          {renderButton('-', () => handlePress('-'), 'outlined')}
        </SafeAreaView>
        <SafeAreaView style={styles.row}>
          {renderButton('0', () => handlePress('0'))}
          {renderButton('.', () => handlePress('.'))}
          {renderButton('=', handleEqual, 'contained')}
          {renderButton('+', () => handlePress('+'), 'outlined')}
        </SafeAreaView>

        <SafeAreaView style={styles.row}>
          {renderButton('Limpar', handleClear, 'text')}
        </SafeAreaView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#f2f2f2',
  },
  input: {
    marginBottom: 10,
  },
  result: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});
