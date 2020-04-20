type Props = {
    condition: boolean;
    wrapper: (children: JSX.Element) => JSX.Element;
    children: JSX.Element;
};

const ConditionalWrapper = ({ condition, wrapper, children }: Props): JSX.Element =>
    condition ? wrapper(children) : children;

export default ConditionalWrapper;
