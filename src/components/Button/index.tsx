import {
  ButtonContainer,
  TextContainer,
  PlusSign,
  VariantProps,
} from './styles';

type ButtonProps = {
  text?: string;
  showIcon: boolean;
  onPress?: () => void;
} & VariantProps;

export function Button({
  text,
  onPress = () => {},
  variant = 'PRIMARY',
  showIcon = true,
}: ButtonProps) {
  return (
    <ButtonContainer onPress={() => onPress()} variant={variant}>
      {showIcon && (
        <TextContainer variant={variant}>
          <PlusSign variant={variant} />
        </TextContainer>
      )}
      <TextContainer variant={variant}>{text}</TextContainer>
    </ButtonContainer>
  );
}
