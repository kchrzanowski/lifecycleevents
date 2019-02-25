export function LifecycleEvents(target) {
  Object.defineProperty(target.prototype, 'ngOnInit', {
    value: () => {
      console.log('Decorate ngOnInit');
    }
  });
  Object.defineProperty(target.prototype, 'ngOnDestroy', {
    value: () => {
      console.log('Decorate ngOnDestroy');
    }
  });
}
