// Рекурсія: HTML tree
{
    function htmlTree(node) {
        const { tagName, attrs, children } = node;
        let htmlString = `<${tagName}`;

        if (attrs) {
            Object.keys(attrs).forEach((key) => {
                htmlString += ` ${key}='${attrs[key]}'`;
            });
        }

        htmlString += '>';

        if (Array.isArray(children)) {
            children.forEach((child) => {
                if (typeof child === 'object') {
                    htmlString += htmlTree(child);
                } else {
                    htmlString += child;
                }
            });
        }

        htmlString += `</${tagName}>`;

        return htmlString;
    }
    const table = {
        tagName: 'table',
        attrs: {
            border: '1',
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: 'td',
                        children: ['1x1'],
                    },
                    {
                        tagName: 'td',
                        children: ['1x2'],
                    },
                ],
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: 'td',
                        children: ['2x1'],
                    },
                    {
                        tagName: 'td',
                        children: ['2x2'],
                    },
                ],
            },
        ],
    };

    document.write(htmlTree(table))
}

// Рекурсія: DOM tree
{
    function createDOM(parent, element) {
        const { tagName, children, attrs } = element;

        const el = document.createElement(tagName);

        if (attrs) {
            for (const [key, value] of Object.entries(attrs)) {
                el.setAttribute(key, value);
            }
        }

        if (Array.isArray(children)) {
            for (const child of children) {
                createDOM(el, child);
            }
        } else if (typeof children === 'string') {
            el.textContent = children;
        } else if (typeof children === 'object') {
            const childEl = createDOM(el, children);
            el.appendChild(childEl);
        }

        parent.appendChild(el);
        return el;
    }

    function domTree(parent, tree) {
        createDOM(parent, tree);
    }

    const body = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a data please:']
                    },
                    {
                        tagName: 'br'
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name'
                        }
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname'
                        }
                    }
                ]
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'OK'
                        },
                        children: [
                            {
                                tagName: 'span',
                                children: ['OK']
                            }
                        ]
                    },
                    {
                        tagName: 'button',
                        attrs: {
                            id: 'Cancel'
                        },
                        children: [
                            {
                                tagName: 'span',
                                children: ['Cancel']
                            }
                        ]
                    }
                ]
            }
        ]
    };

    domTree(document.body, body);

}


// Рекурсія: Deep Copy
{
    function deepCopy(obj) {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }
    
        const clone = Array.isArray(obj) ? [] : {};
    
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                clone[key] = deepCopy(obj[key]);
            }
        }
    
        return clone;
    }
    
    const arr = [1, "string", null, undefined, { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
    const arr2 = deepCopy(arr);
    const table2 = deepCopy(table);
    console.log(arr2);
    console.log(table2)

}

// Рекурсия: My Stringify
{
    function stringify(value) {
        if (typeof value === 'undefined') {
            return 'null';
        }

        if (typeof value === 'function') {
            return undefined;
        }

        if (value === null) {
            return 'null';
        }

        if (typeof value === 'number' || typeof value === 'boolean') {
            return value.toString();
        }

        if (typeof value === 'string') {
            return '"' + value + '"';
        }

        if (Array.isArray(value)) {
            const elements = value.map((element) => stringify(element));
            return '[' + elements.join(',') + ']';
        }

        if (typeof value === 'object') {
            const result = Object.keys(value).map((key) => {
                const val = stringify(value[key]);
                if (typeof val !== 'undefined') {
                    return '"' + key + '":' + val;
                }
                return undefined;
            }).filter((item) => typeof item !== 'undefined');
            return '{' + result.join(',') + '}';
        }
    }

    const arr = [1, "string", null, undefined, { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
    const jsonString = stringify(arr);
    console.log(JSON.parse(jsonString))
}

// Рекурсія: getElementById throw
{
    function getElementById(idToFind) {
        let foundElement = null;
      
        function walker(parent) {
          for (const child of parent.children) {
            if (child.id === idToFind) {
              foundElement = child;
              throw foundElement;
            }
            walker(child);
          }
        }
      
        try {
          walker(document.body);
        } catch (element) {
          return element;
        }
      }
}