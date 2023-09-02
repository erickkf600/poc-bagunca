import { StyleSheet, Text, View } from 'react-native';

const Security = () => {
  return (
    <>
      <View style={styles.page}>
      <View style={styles.container}>
          <Text>
          A segurança é uma questão crítica para qualquer empresa, especialmente quando se trata de coleta, armazenamento e processamento de dados pessoais. É importante que uma empresa de reciclagem, como a Recly, adote medidas de segurança adequadas para proteger as informações de seus clientes.
          </Text>
          <Text>
          Algumas das medidas de segurança que implementamos incluem:
          </Text>
          <Text>
          1. Criptografia de dados: os dados pessoais dos clientes, incluindo informações de cartão de crédito e endereço, podem ser criptografados antes de serem armazenados ou transmitidos.
          </Text>
          <Text>
          2. Autenticação de usuário forte: a Recly pode implementar uma autenticação de usuário forte, como autenticação de dois fatores, para garantir que apenas usuários autorizados possam acessar ou modificar informações.
          </Text>
          <Text>
          3. Firewalls e proteção contra ataques: a Recly pode usar firewalls e outras tecnologias de proteção para bloquear ataques cibernéticos e outras ameaças à segurança.
          </Text>
          <Text>
          4. Monitoramento e detecção de ameaças: a Recly pode monitorar continuamente seu sistema para detectar e responder a qualquer ameaça à segurança.
          </Text>
          <Text>
          5. Treinamento de segurança para funcionários: todos os funcionários da Recly podem ser treinados em práticas seguras de coleta, armazenamento e processamento de dados.
          </Text>
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    page: {
     backgroundColor: '#fafafa',
     minHeight: '100%'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 28,
        paddingHorizontal: 25,
    },
});

export default Security
