import { StyleSheet, Text, View } from 'react-native';

const PrivaCYPolitic = () => {
  return (
    <>
      <View style={styles.page}>
      <View style={styles.container}>
          <Text>
          A política de privacidade da Recly é uma declaração importante sobre os valores e práticas da empresa em relação à proteção de informações pessoais e dados dos clientes.
          </Text>
          <Text>
          A Recly reconhece a importância de proteger a privacidade dos seus clientes e toma medidas razoáveis para garantir que as informações pessoais dos clientes sejam tratadas de forma segura e confidencial. A empresa coleta apenas informações necessárias para prestar seus serviços, e essas informações são armazenadas em sistemas seguros e protegidos por medidas de segurança físicas e tecnológicas.
          </Text>
          <Text>
          A Recly não vende, comparte ou aluga informações pessoais dos clientes a terceiros, a menos que seja exigido por lei ou seja necessário para prestar os serviços da empresa. No entanto, a empresa pode compartilhar informações agregadas e não identificáveis com parceiros comerciais e outras partes interessadas para fins de pesquisa e análise.
          </Text>
          <Text>
          A Recly também fornece aos clientes acesso a suas informações pessoais e a capacidade de atualizá-las ou excluí-las a qualquer momento. Além disso, a empresa segue rigorosos padrões de privacidade em todos os aspectos de seus serviços, incluindo a coleta, armazenamento e processamento de informações pessoais.
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

export default PrivaCYPolitic
