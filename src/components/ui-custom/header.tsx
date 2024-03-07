type Props = {
  title: string;
  subtitle?: string;
};

export function Header(props: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">{props.title}</h2>
        {props.subtitle && (
          <p className="text-sm text-muted-foreground">{props.subtitle}</p>
        )}
      </div>
    </div>
  );
}
