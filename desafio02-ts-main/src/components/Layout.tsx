import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@chakra-ui/react";

export const Layout = ({ children }: any) => {
	return (
		<Box minHeight="100dvh" backgroundColor="#9413dc" display="flex" justifyContent="space-between" alignItems="center" flexDirection="column">
			<Header />
			{children}
			<Footer />
		</Box>
	);
};
