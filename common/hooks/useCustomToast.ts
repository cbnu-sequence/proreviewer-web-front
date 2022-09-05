import { useToast } from '@chakra-ui/react';

export function useCustomToast() {
  return useToast({
    isClosable: true,
    position: 'top',
    duration: 5000,
    containerStyle: {
      width: '300px',
      fontSize: '11px',
    },
    variant: 'subtle',
  });
}
