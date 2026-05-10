function toggleTheme() {
    const htmlEl = document.documentElement;
    const btn = document.getElementById('theme-toggle');
    const currentTheme = htmlEl.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        htmlEl.setAttribute('data-theme', 'light');
        btn.innerText = '🌙 Escuro';
    } else {
        htmlEl.setAttribute('data-theme', 'dark');
        btn.innerText = '☀️ Claro';
    }
}

function showTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[onclick="showTab('${tabId}')"]`);
    if(activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.setAttribute('aria-selected', 'true');
    }
    document.getElementById(tabId).classList.add('active');

    clearResult();
}

function clearResult() {
    const container = document.getElementById('result-container');
    container.classList.remove('error');
    
    document.getElementById('result-text').innerText = '-';
    document.getElementById('formula-text').innerHTML = '';
}

function showResult(value, formula) {
    const container = document.getElementById('result-container');
    container.classList.remove('error');
    
    const resultText = document.getElementById('result-text');
    
    let displayValue = value.toString();
    if (displayValue.length > 20 && value > 10000n) {
        displayValue = displayValue.substring(0, 15) + '... (+' + (displayValue.length - 15) + ' dígitos)';
    }

    resultText.innerText = displayValue;
    
    resultText.style.transform = 'scale(1.05)';
    setTimeout(() => {
        resultText.style.transform = 'scale(1)';
    }, 200);

    document.getElementById('formula-text').innerHTML = formula;
}

function showError(msg) {
    const container = document.getElementById('result-container');
    container.classList.add('error');
    
    document.getElementById('result-text').innerText = 'Erro';
    document.getElementById('formula-text').innerHTML = `${msg}`;
}

function fatorial(n) {
    if (n < 0n) return -1n;
    if (n === 0n || n === 1n) return 1n;
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
        result *= i;
    }
    return result;
}


//Cálculos
function calcPermSimples() {
    try {
        const nInput = document.getElementById('ps-n').value;
        if (!nInput) return showError('Por favor, insira o valor de n.');
        
        const n = BigInt(nInput);
        if (n < 0n) return showError('O valor de n deve ser maior ou igual a 0.');

        const result = fatorial(n);
        showResult(result, `P(${n}) = ${n}!`);
    } catch (e) {
        showError('Entrada inválida.');
    }
}

function calcPermRep() {
    try {
        const nInput = document.getElementById('pr-n').value;
        const repsInput = document.getElementById('pr-reps').value;
        
        if (!nInput) return showError('Por favor, insira o valor de n.');
        if (!repsInput) return showError('Por favor, insira as repetições.');

        const n = BigInt(nInput);
        if (n < 0n) return showError('O valor de n deve ser maior ou igual a 0.');

        const reps = repsInput.split(',').map(s => s.trim()).filter(s => s !== '');
        if (reps.length === 0) return showError('Insira repetições válidas separadas por vírgula.');
        
        let denom = 1n;
        let sumReps = 0n;
        let denomStr = [];

        for (const rep of reps) {
            if (!/^\d+$/.test(rep)) return showError('As repetições devem ser números inteiros.');
            
            const r = BigInt(rep);
            if (r < 0n) return showError('As repetições não podem ser negativas.');
            
            denom *= fatorial(r);
            sumReps += r;
            denomStr.push(`${r}!`);
        }

        if (sumReps > n) return showError('A soma das repetições não pode exceder o total n.');

        const result = fatorial(n) / denom;
        showResult(result, `P(${n}; ${reps.join(', ')}) = ${n}! / (${denomStr.join(' &times; ')})`);
    } catch (e) {
        showError('Entrada inválida.');
    }
}

function calcArranjo() {
    try {
        const nInput = document.getElementById('arr-n').value;
        const pInput = document.getElementById('arr-p').value;
        
        if (!nInput || !pInput) return showError('Por favor, insira os valores de n e p.');

        const n = BigInt(nInput);
        const p = BigInt(pInput);

        if (n < 0n || p < 0n) return showError('Os valores de n e p devem ser >= 0.');
        if (p > n) return showError('O valor de p (escolhidos) não pode ser maior que n (total).');

        const result = fatorial(n) / fatorial(n - p);
        showResult(result, `A(${n}, ${p}) = ${n}! / (${n}-${p})!`);
    } catch (e) {
        showError('Entrada inválida.');
    }
}

function calcCombinacao() {
    try {
        const nInput = document.getElementById('comb-n').value;
        const pInput = document.getElementById('comb-p').value;
        
        if (!nInput || !pInput) return showError('Por favor, insira os valores de n e p.');

        const n = BigInt(nInput);
        const p = BigInt(pInput);

        if (n < 0n || p < 0n) return showError('Os valores de n e p devem ser >= 0.');
        if (p > n) return showError('O valor de p (escolhidos) não pode ser maior que n (total).');

        const result = fatorial(n) / (fatorial(p) * fatorial(n - p));
        showResult(result, `C(${n}, ${p}) = ${n}! / (${p}! &times; (${n}-${p})!)`);
    } catch (e) {
        showError('Entrada inválida.');
    }
}
