import newworld from '../../assets/newworld.png'
import { CorFundo, Logo, Um, Dois, Tres, Quatro, Cinco, Seis, EspaçoUm, EspaçoDois, EspaçoTres, EspaçoQuatro, EspaçoCinco, EspaçoSeis, Botão  } from './Cadastro.jsx'
import { Input, Button  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Cadastro() {
    return (
        <>
            <CorFundo>
                <Logo src={newworld} />
                <Um><div>Nome</div></Um>

                <EspaçoUm>
                    <Input
                        placeholder="Escreva seu nome"
                        size="md"
                        type="email"
                        borderRadius='17px'
                        height='35px'
                        width='87%'
                        variant='filled'/>
                </EspaçoUm>

                <Dois><div>Sobrenome</div></Dois>

                <EspaçoDois>
                    <Input
                        placeholder="Escreva seu sobrenome"
                        size="lg"
                        type=''
                        borderRadius='17px'
                        height='35px'
                        width='87%'
                        variant='filled' />
                </EspaçoDois>

                <Tres><div>E-mail</div></Tres>

                <EspaçoTres>
                    <Input
                        placeholder="Escreva seu e-mail"
                        size="md"
                        type="email"
                        borderRadius='17px'
                        height='35px'
                        width='87%'
                        variant='filled'
                        />
                </EspaçoTres>

                <Quatro><div>Senha</div></Quatro>

                <EspaçoQuatro>
                    <Input
                        placeholder="Escreva sua senha"
                        size="lg"
                        type="password"
                        borderRadius='17px'
                        height='35px'
                        width='87%'
                        variant='filled' />
                </EspaçoQuatro>

                <Cinco><div>Confirme a senha</div></Cinco>

                <EspaçoCinco>
                    <Input
                        placeholder="Escreva sua senha de novo"
                        size="md"
                        type='password'
                        borderRadius='17px'
                        height='35px'
                        width='87%'
                        variant='filled' />
                </EspaçoCinco>

                <Seis><div>Data de nascimento </div></Seis>

                <EspaçoSeis>
                    <Input
                        placeholder=""
                        size="lg"
                        type='date'
                        borderRadius='17px'
                        height='35px'
                        width='87%'
                        variant='filled' />
                </EspaçoSeis>

                <Link to="/PgPrincipal"><Botão>
                    <Button
                        backgroundColor='#77A96F'
                        width='310px'
                        border='0px'
                        height='50px'
                        borderRadius='25px'>
                        Entrar</Button>
                </Botão></Link>

                
            </CorFundo>
        </>
    )
}

export default Cadastro 