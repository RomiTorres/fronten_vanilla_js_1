export interface IPrintable {
  render(
    printableElement: HTMLElement,
    targetNode: HTMLElement,
    position: InsertPosition
  ): void;
}