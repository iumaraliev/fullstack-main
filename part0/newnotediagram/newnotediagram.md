::: mermaid
flowchart LR
    Browser --> B(server: GET https://studies.cs.helsinki.fi/exampleapp/notes)
    C([Activate Server])
    Server --> D(Browser: HTML document)
    F(Browser) --> E(Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css)
    G([Activate Server])
    H(server) --> J(browser: the css file)
    K([Deactivate Server])
    L(Browser) --> M(server: GET https://studies.cs.helsinki.fi/exampleapp/main.js)
    N([Activate Server])
    O(Server) --> P(browser: the JavaScript file)
    Q(Deactivate Server)
    R(Browser) --> S(server: GET https://studies.cs.helsinki.fi/exampleapp/data.json)
    T(Activate Server)
    U(Server) --> X(browser: Returns json file)
    Y(Deactivate Server)
    Z(Browser: User Input) --> AB(Server)
    AC(Server: HTTP status code 302) --> AD(Browser: HTTP GET request)
    AE(Browser: Fetchs main.css index.js data.json)
:::