import Card from 'react-bootstrap/Carousel';


export default function BgColorExample() {
    return (
        <>
                {[
                    'https://rgdwsabzajcksicdqvja.supabase.co/storage/v1/object/public/imagens/parceiros/parceiro-01.png',
                    'https://rgdwsabzajcksicdqvja.supabase.co/storage/v1/object/public/imagens/parceiros/parceiro-02.png',
                    'https://rgdwsabzajcksicdqvja.supabase.co/storage/v1/object/public/imagens/parceiros/parceiro-03.png',
                    
                ].map((variant) => (
                    <Card styled={'border:10 30 10 30'}>
                        <img
                            className="d-block w-100"
                            src={variant.toLowerCase()}
                        />
                    </Card>
                ))}

        </>
    );
}