// Person Constructor
{
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getFullName = function () {
            let fullName = this.name + ' ' + this.surname;
            if (this.fatherName) {
                fullName = this.name + ' ' + this.fatherName + ' ' + this.surname;
            }
            return fullName;
        };
    }

    const a = new Person("Вася", "Пупкін");
    const b = new Person("Ганна", "Іванова");
    const c = new Person("Єлизавета", "Петрова");

    console.log(a.getFullName());
    a.fatherName = 'Іванович';
    console.log(a.getFullName());
    console.log(b.getFullName());
}

// Person Prototype
{
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Person.prototype.getFullName = function () {
        let fullName = this.name + ' ' + this.surname;
        if (this.fatherName) {
            fullName = this.name + ' ' + this.fatherName + ' ' + this.surname;
        }
        return fullName;
    };

    const a = new Person("Вася", "Пупкін");
    const b = new Person("Ганна", "Іванова");
    const c = new Person("Єлизавета", "Петрова");

    console.log(a.getFullName());
    a.fatherName = 'Іванович';
    console.log(a.getFullName());
    console.log(b.getFullName());

}

// Store
{
    function Store(reducer) {
        let state = reducer(undefined, {});
        const subscribers = [];

        this.getState = function () {
            return state;
        };

        this.dispatch = function (action) {
            state = reducer(state, action);
            subscribers.forEach(function (subscriber) {
                subscriber();
            });
        };

        this.subscribe = function (subscriber) {
            subscribers.push(subscriber);
            return function unsubscribe() {
                subscribers = subscribers.filter(function (sub) {
                    return sub !== subscriber;
                });
            };
        };
    }
}

// Password
{
    function Password(parent, open) {
        const loginInput = document.createElement('input');
        loginInput.placeholder = 'Логін';
        const input = document.createElement('input');
        input.type = 'password';
        input.placeholder = 'Пароль';
      
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
      
        let value = '';
        let isOpen = open;
      
        this.setValue = function (newValue) {
          value = newValue;
          input.value = value;
          triggerChange();
          checkFormValidity();
        };
      
        this.getValue = function () {
          return value;
        };
      
        this.setOpen = function (newOpen) {
          isOpen = newOpen;
          passwordVisibility();
          checkbox.checked = isOpen;
          triggerOpenChange();
        };
      
        this.getOpen = function () {
          return isOpen;
        };
      
        function triggerChange() {
          if (typeof this.onChange === 'function') {
            this.onChange(value);
          }
        }
      
        function triggerOpenChange() {
          if (typeof this.onOpenChange === 'function') {
            this.onOpenChange(isOpen);
          }
        }
      
        function passwordVisibility() {
          input.type = isOpen ? 'text' : 'password';
        }
      
        checkbox.addEventListener('change', function () {
          isOpen = checkbox.checked;
          passwordVisibility();
          triggerOpenChange();
        });
      
        input.addEventListener('input', function () {
          value = input.value;
          triggerChange();
          checkFormValidity();
        });
      
        function checkFormValidity() {
          if (loginInput.value.trim() !== '' && input.value.trim() !== '') {
            submitButton.disabled = false;
          } else {
            submitButton.disabled = true;
          }
        }
      
        parent.appendChild(loginInput);
        parent.appendChild(input);
        parent.appendChild(checkbox);
      }
      
      const password = new Password(document.body, true);
      
      const submitButton = document.createElement('button');
      submitButton.textContent = 'Увійти';
      submitButton.disabled = true;
      
      function checkFormValidity() {
        if (password.getValue().trim() !== '' && password.getOpen().trim() !== '') {
          submitButton.disabled = false;
        } else {
          submitButton.disabled = true;
        }
      }
      
      password.onChange = checkFormValidity;
      password.onOpenChange = checkFormValidity;
      
      document.body.appendChild(submitButton);
      
}

// LoginForm Constructor
{
    function Password(parent, open) {
        const loginInput = document.createElement('input');
        loginInput.placeholder = 'Логін';
        const input = document.createElement('input');
        input.type = 'password';
        input.placeholder = 'Пароль';
      
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
      
        let value = '';
        let isOpen = open;
      
        this.setValue = function (newValue) {
          value = newValue;
          input.value = value;
          triggerChange();
          checkFormValidity();
        };
      
        this.getValue = function () {
          return value;
        };
      
        this.setOpen = function (newOpen) {
          isOpen = newOpen;
          passwordVisibility();
          checkbox.checked = isOpen;
          triggerOpenChange();
        };
      
        this.getOpen = function () {
          return isOpen;
        };
      
        this.onChange = null;
        this.onOpenChange = null;
      
        function triggerChange() {
          if (typeof this.onChange === 'function') {
            this.onChange(value);
          }
        }
      
        function triggerOpenChange() {
          if (typeof this.onOpenChange === 'function') {
            this.onOpenChange(isOpen);
          }
        }
      
        function passwordVisibility() {
          input.type = isOpen ? 'text' : 'password';
        }
      
        checkbox.addEventListener('change', function () {
          isOpen = checkbox.checked;
          passwordVisibility();
          triggerOpenChange();
        });
      
        input.addEventListener('input', function () {
          value = input.value;
          triggerChange();
          checkFormValidity();
        });
      
        function checkFormValidity() {
          if (loginInput.value.trim() !== '' && input.value.trim() !== '') {
            submitButton.disabled = false;
          } else {
            submitButton.disabled = true;
          }
        }
      
        parent.appendChild(loginInput);
        parent.appendChild(input);
        parent.appendChild(checkbox);
      }
      
      const password = new Password(document.body, true);
      
      const submitButton = document.createElement('button');
      submitButton.textContent = 'Увійти';
      submitButton.disabled = true;
      
      function checkFormValidity() {
        if (password.getValue().trim() !== '' && password.getOpen()) {
          submitButton.disabled = false;
        } else {
          submitButton.disabled = true;
        }
      }
      
      password.onChange = checkFormValidity;
      password.onOpenChange = checkFormValidity;
      
      document.body.appendChild(submitButton);
       
}

// Password Verify
{
    function Password(parent, open) {
        const loginInput = document.createElement('input');
        loginInput.placeholder = 'Логін';
        const input = document.createElement('input');
        input.type = 'password';
        input.placeholder = 'Пароль';
        const confirmInput = document.createElement('input');
        confirmInput.type = 'password';
        confirmInput.placeholder = 'Підтвердження пароля';
      
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
      
        let value = '';
        let isOpen = open;
      
        this.setValue = function (newValue) {
          value = newValue;
          input.value = value;
          confirmInput.value = value;
          triggerChange();
          checkFormValidity();
        };
      
        this.getValue = function () {
          return value;
        };
      
        this.setOpen = function (newOpen) {
          isOpen = newOpen;
          passwordVisibility();
          checkbox.checked = isOpen;
          triggerOpenChange();
          checkFormValidity();
        };
      
        this.getOpen = function () {
          return isOpen;
        };
      
        this.onChange = null;
        this.onOpenChange = null;
      
        function triggerChange() {
          if (typeof this.onChange === 'function') {
            this.onChange(value);
          }
        }
      
        function triggerOpenChange() {
          if (typeof this.onOpenChange === 'function') {
            this.onOpenChange(isOpen);
          }
        }
      
        function passwordVisibility() {
          input.type = isOpen ? 'text' : 'password';
          confirmInput.style.display = isOpen ? 'none' : 'block';
          if (!isOpen) {
            confirmInput.value = '';
          }
        }
      
        checkbox.addEventListener('change', function () {
          isOpen = checkbox.checked;
          passwordVisibility();
          triggerOpenChange();
          checkFormValidity();
        });
      
        input.addEventListener('input', function () {
          value = input.value;
          triggerChange();
          checkFormValidity();
        });
      
        confirmInput.addEventListener('input', function () {
          checkFormValidity();
        });
      
        function checkFormValidity() {
          const isMatching = input.value === confirmInput.value;
          if (loginInput.value.trim() !== '' && input.value.trim() !== '' && isMatching) {
            submitButton.disabled = false;
            removeInputErrorStyle(input);
            removeInputErrorStyle(confirmInput);
          } else {
            submitButton.disabled = true;
            applyInputErrorStyle(input, !isMatching);
            applyInputErrorStyle(confirmInput, !isMatching);
          }
        }
      
        function applyInputErrorStyle(inputElement, isError) {
          if (isError) {
            inputElement.style.border = '1px solid red';
          } else {
            inputElement.style.border = '';
          }
        }
      
        function removeInputErrorStyle(inputElement) {
          inputElement.style.border = '';
        }
      
        parent.appendChild(loginInput);
        parent.appendChild(input);
        parent.appendChild(confirmInput);
        parent.appendChild(checkbox);
      }
      
      const password = new Password(document.body, true);
      
      const submitButton = document.createElement('button');
      submitButton.textContent = 'Увійти';
      submitButton.disabled = true;
      
      function checkFormValidity() {
        if (password.getValue().trim() !== '' && password.getOpen()) {
          submitButton.disabled = false;
        } else {
          submitButton.disabled = true;
        }
      }
      
      password.onChange = checkFormValidity;
      password.onOpenChange = checkFormValidity;
      
      document.body.appendChild(submitButton);
      
}