*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}     file://${CURDIR}/../index.html
${BROWSER}     chrome

*** Test Cases ***
Abrir formulário e validar campos obrigatórios
    Open Browser    ${URL}    ${BROWSER}
    Click Button    id=btnEnviar
    Page Should Contain    Por favor preencha login e senha.
    Close Browser

Preencher login e senha com sucesso
    Open Browser    ${URL}    ${BROWSER}
    Input Text    id=login    elane_user
    Input Password    id=senha    123456
    Click Button    id=btnEnviar
    Page Should Contain    Login recebido com sucesso!
    Close Browser
