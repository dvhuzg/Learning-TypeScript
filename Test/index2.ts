interface Employee {
    id: number;
    name: string;
    salary: number;
  }
  
  const obj: Partial<Pick<Employee, 'id' | 'name'>> &
    Omit<Employee, 'id' | 'name'> = {
    id: 1,
    name: 'Bob',
    salary: 100,
  };
  
  delete obj['name'];
  console.log(obj)
  