const NUMBER_fORMATER = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  export default function formatter(number:number) {
    return  NUMBER_fORMATER.format(number);
  }
