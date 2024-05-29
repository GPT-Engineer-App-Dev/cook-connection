import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea, Image, useToast } from "@chakra-ui/react";

const SubmitRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !instructions || !image) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Here you would typically handle the form submission, e.g., send the data to a server
    console.log({ title, ingredients, instructions, image });

    toast({
      title: "Recipe Submitted",
      description: "Your recipe has been submitted successfully!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Clear the form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setImage(null);
  };

  return (
    <Container maxW="container.md" p={4}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Submit a Recipe
      </Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl id="title" isRequired mb={4}>
          <FormLabel>Recipe Title</FormLabel>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="ingredients" isRequired mb={4}>
          <FormLabel>Ingredients</FormLabel>
          <Textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </FormControl>
        <FormControl id="instructions" isRequired mb={4}>
          <FormLabel>Instructions</FormLabel>
          <Textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        </FormControl>
        <FormControl id="image" isRequired mb={4}>
          <FormLabel>Image</FormLabel>
          <Input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          {image && (
            <Image
              src={URL.createObjectURL(image)}
              alt="Recipe"
              mt={4}
              boxSize="200px"
              objectFit="cover"
            />
          )}
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg" width="full">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default SubmitRecipe;