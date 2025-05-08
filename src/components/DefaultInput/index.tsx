import styles from './styles.module.css'

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>

export function DefaultInput({ labelText, id, type, ...rest }: DefaultInputProps) {
  return (
    <>
      {/* O if abaixo que está comentado seria o mais longo comparado
      ao que está em uso */}
      {/*labelText ? <label htmlFor={id}>{labelText}</label> : '' */}
      {/*labelText && <label htmlFor={id}>{labelText}</label>*/}
      {/* o && acima é um if onde o else não existe */}
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}