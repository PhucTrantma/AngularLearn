type NgElement = import('@angular/elements').NgElement;
type WithProperties<T> = import('@angular/elements').WithProperties<T>;

interface HTMLElementTagNameMap {
  'popup-component': NgElement & WithProperties<{ message: string }>;
}
