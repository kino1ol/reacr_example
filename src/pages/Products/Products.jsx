import { useLoaderData } from "react-router-dom";
import Product from "../../components/Product";
import ContainerStyled from "../../styledComponents/Container";
import Flex from "../../styledComponents/Flex";

export default function Products() {
    const data = useLoaderData()

    return (
        <section>
            <ContainerStyled pb={60}>
                <Flex>
                    {data.map((product, i) => <Product product={product} key={`${product.title}-${i}`} />)}
                </Flex>
            </ContainerStyled>
        </section>
    )
}