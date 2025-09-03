import { ChakraProvider, Box } from "@chakra-ui/react";
import LoginForm from "./components/Form";
import { Layout } from "./components/Layout";

function App() {
	return (
		<ChakraProvider>
			<Layout>
				<LoginForm />
			</Layout>
		</ChakraProvider>
	);
}

export default App;
