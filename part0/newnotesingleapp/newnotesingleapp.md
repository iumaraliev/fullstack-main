::: mermaid
flowchart LR
    A(Browser) -->B(Server: GET https://studies.cs.helsinki.fi/exampleapp/spa)
    C([Activate Server])
    D(Server) --> F(Browser: HTML document)
    G(Deactive Server)
    H(Browser) --> J(Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css)
    K(Activate Server)
    L(Server) --> M(Browser: CSS file)
    N(Deactivate Server)
    O(Browser) --> P(Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js)
    Q(Activate Server)
    R(Server) --> S(Browser: JS file)
    T(Deactivate Server)
    U(Browser) --> V(Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json)
    X(Server) --> Y(Browser: JSON file)
    AB(Browser: New Note) --> AC(Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa)
:::