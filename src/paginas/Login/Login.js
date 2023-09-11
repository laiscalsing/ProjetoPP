import logo from '../../assets/logo.png';
import { CorFundo, Logo, Um, Dois, Botão, EspaçoUm, EspaçoDois, EscritaU, EscritaD } from './Login.jsx';
import { Input, Button } from '@chakra-ui/react'
import { Link } from "react-router-dom"



function Login() {

    return (
        <>
            <CorFundo>
                <Logo src={logo} />
                <Um><div>E-mail</div></Um>

                <EspaçoUm>
                    <Input
                        placeholder="Escreva seu e-mail"
                        size="md"
                        type="email"
                        borderRadius='17px'
                        height='35px'
                        width='87%'
                        variant='filled'/>
                </EspaçoUm>

                <Dois><div>Senha</div></Dois>

                <EspaçoDois>
                    <Input
                        placeholder="Escreva sua senha"
                        size="lg"
                        type="password"
                        borderRadius='17px'
                        height='35px'
                        width='87%'
                        variant='filled' />
                </EspaçoDois>

                <br></br>

                <Link to="/PgPrincipal"><Botão>
                    <Button
                        backgroundColor='#77A96F'
                        width='310px'
                        border='0px'
                        height='50px'
                        borderRadius='25px'>
                        Entrar</Button>
                </Botão></Link>


                <EscritaU>
                    <className>Você não possui uma conta?</className>
                </EscritaU>

                <Link to="/Cadastro"><EscritaD>
                    <Button colorScheme='teal' variant='link'>
                        Crie agora        </Button>
                </EscritaD></Link>


            </CorFundo>

        </>
    )
}

export default Login