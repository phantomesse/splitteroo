const billSection = document.getElementById('bill-section');
const addItemButton = document.getElementById('add-item-button');
const totalBillInput = document.getElementById('total-bill-input');
const taxTipInput = document.getElementById('tax-tip-input');

class Item {
  constructor(label) {
    this.label = label;
    this.value = 0;
    this.personNames = [];
    items.push(this);
    const self = this;

    // Create item label input.
    this.itemLabelInput = document.createElement('input');
    this.itemLabelInput.value = this.label;
    this.itemLabelInput.addEventListener('click', () => {
      self._enterEditMode();
    });

    // Create item value input.
    this.itemValueInput = document.createElement('input');
    this.itemValueInput.setAttribute('placeholder', '0.00');
    this.itemValueInput.setAttribute('type', 'number');
    this.itemValueInput.addEventListener('blur', () => {
      self.value = parseFloat(self.itemValueInput.value);
      formatDollars(self.itemValueInput);
      calculateTaxTip();
    });
  }

  render() {
    const itemDetailsContainer = document.createElement('div');
    itemDetailsContainer.className = 'item-details';

    const itemValueMoneyInput = document.createElement('div');
    itemValueMoneyInput.className = 'money-input';
    itemValueMoneyInput.append(this.itemValueInput);

    const associatePersonButton = document.createElement('button');
    associatePersonButton.className = 'associated-person add-button';
    const associatedPersonContainer = document.createElement('div');
    associatedPersonContainer.className = 'associated-people';
    associatedPersonContainer.append(associatePersonButton);
    itemDetailsContainer.append(itemValueMoneyInput, associatedPersonContainer);

    billSection.insertBefore(this.itemLabelInput, addItemButton);
    billSection.insertBefore(itemDetailsContainer, addItemButton);
  }

  _enterEditMode() {
    this.itemLabelInput;
  }

  _exitEditMode() {}
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

const items = [];
addItem();
addItemButton.addEventListener('click', () => addItem());

totalBillInput.addEventListener('blur', () => {
  formatDollars(totalBillInput);
  calculateTaxTip();
});

function addItem() {
  new Item(`Item ${items.length + 1}`).render();
}

function formatDollars(inputElement) {
  inputElement.value = (Math.round(inputElement.value * 100) / 100).toFixed(2);
}

function calculateTaxTip() {
  const totalBill = totalBillInput.value;
  const itemsTotal = items.map(item => item.value).reduce((a, b) => a + b);
  const taxTip = totalBill - itemsTotal;
  taxTipInput.value = taxTip;
  formatDollars(taxTipInput);
}
