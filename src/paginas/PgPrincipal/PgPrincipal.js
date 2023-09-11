import NWlogo from "../../assets/NWlogo.png";
import { CorFundo, Logo, Um, Dois, Tres, Quatro, Cinco} from './PgPrincipal.jsx';
import { Button } from '@chakra-ui/react'


function PgPrincipal(){
    return(
        <>
        <CorFundo>
            <Logo src={NWlogo}/>
            <Um>
                    <Button
                        backgroundColor='#AEC2AB'
                        width='140px'
                        border='0px'
                        height='200px'
                        borderRadius='25px'>
                        Foto</Button>
                </Um>
                <Dois>
                    <Button
                        backgroundColor='#AEC2AB'
                        width='140px'
                        border='0px'
                        height='200px'
                        borderRadius='25px'>
                        foto</Button>
                </Dois>
                <Tres>
                    <Button
                        backgroundColor='#AEC2AB'
                        width='140px'
                        border='0px'
                        height='200px'
                        borderRadius='25px'>
                        Foto</Button>
                </Tres>
                <Quatro>
                    <Button
                        backgroundColor='#AEC2AB'
                        width='140px'
                        border='0px'
                        height='200px'
                        borderRadius='25px'>
                        Foto</Button>
                </Quatro>
            
                <Cinco>
                    <Button
                        backgroundColor='#AEC2AB'
                        width='300px'
                        border='0px'
                        height='100px'
                        borderRadius='25px'>
                        Foto</Button>
                </Cinco>
        </CorFundo>
        </>
    )   
}

export default PgPrincipal;