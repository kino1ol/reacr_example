import { useLoaderData } from "react-router-dom";
import Product from "../../components/Product";
import ContainerStyled from "../../styledComponents/Container";
import Flex from "../../styledComponents/Flex";

export default function Products() {
    const products = useLoaderData();
    return (
        <section>
            <ContainerStyled>
                <Flex>
                    {products.map((product, i) => <Product product={product} />)}
                </Flex>
            </ContainerStyled>
        </section>
    )
}