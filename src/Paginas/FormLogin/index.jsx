import React from 'react';
import ImgFundo from './imagem.gif';
import './style.css';

function FormLogin() {

    function showRegisterForm() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
        document.getElementById('formTitle').innerText = 'Cadastro'; 
    }
    
    function showLoginForm() {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('formTitle').innerText = 'Logar'; 
    }

    return (
        <section>
            <div className="imgBx">
                <img src={ImgFundo} alt="imagem gif" />
            </div>
            <div className="contentBx">
                <div className="formBx">
                    <h2 id="formTitle">Logar</h2>

                    {/* Formulário de Login */}
                    <form id="loginForm">
                        <div className="inputBx">
                            <span>Usuário</span>
                            <input type="text" name="username" />
                        </div>
                        <div className="inputBx">
                            <span>Senha</span>
                            <input type="password" name="password" />
                        </div>
                        <div className="remember">
                            <label>
                                <input type="checkbox" name="remember" /> Lembrar da senha futuramente
                            </label>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Logar" />
                        </div>
                        <div className="inputBx">
                            <p>
                                Não tem uma conta? <a href="#" onClick={showRegisterForm}>Inscreva-se</a>
                            </p>
                        </div>
                    </form>

                    {/* Formulário de Cadastro */}
                    <form id="registerForm" style={{ display: 'none' }}>
                        <div className="inputBx">
                            <span>Crie um nome de usuário</span>
                            <input type="text" name="newUsername" />
                        </div>
                        <div className="inputBx">
                            <span>Crie uma senha</span>
                            <input type="password" name="newPassword" />
                        </div>
                        <div className="inputBx">
                            <span>Confirme a senha</span>
                            <input type="password" name="confirmPassword" />
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Inscreva-se" />
                        </div>
                        <div className="inputBx">
                            <p>
                                Já tem uma conta? <a href="#" onClick={showLoginForm}>Logar</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default FormLogin;
