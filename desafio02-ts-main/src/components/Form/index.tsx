import { Box, Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

const LoginForm = () => {
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		// Handle form submission logic here
		alert("Seja bem-vindo(a)!");
	};

	return (
		<Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px" display="flex" flexDirection="column" boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" gap="10px" minWidth="300px">
			<form onSubmit={handleSubmit}>
				<Stack spacing={4}>
					<FormControl id="email">
						<FormLabel>Email</FormLabel>
						<Input type="email" placeholder="exemplo@email.com" />
					</FormControl>
					<FormControl id="password">
						<FormLabel>Password</FormLabel>
						<Input type="password" placeholder="**********" />
					</FormControl>
					<Button colorScheme="blue" width="full" type="submit">
						Entrar
					</Button>
				</Stack>
			</form>
		</Box>
	);
};

export default LoginForm;
