import { useToast } from '@chakra-ui/react';

export function useCustomToast() {
  return useToast({
    isClosable: true,
    position: 'top',
    duration: 9000,
    containerStyle: {
      width: '300px',
      fontSize: '11px',
    },
    variant: 'subtle',
  });
}
