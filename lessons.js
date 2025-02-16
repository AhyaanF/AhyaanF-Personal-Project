function checkCode() {
    const codeInput = document.getElementById('code-input').value;
    const lessonType = document.querySelector('main').getAttribute('data-lesson-type');
    let isValid = false;

    switch(lessonType) {
        case 'structure':
            isValid = validateHTML(codeInput);
            break;
        case 'attributes':
            isValid = validateAttributesExercise(codeInput);
            break;
        case 'forms':
            isValid = validateFormExercise(codeInput);
            break;
        case 'tables':
            isValid = validateTableExercise(codeInput);
            break;
        case 'semantic':
            isValid = validateSemanticExercise(codeInput);
            break;
        case 'multimedia':
            isValid = validateMultimediaExercise(codeInput);
            break;
        case 'meta':
            isValid = validateMetaTagsExercise(codeInput);
            break;
        case 'accessibility':
            isValid = validateAccessibilityExercise(codeInput);
            break;
        case 'best-practices':
            isValid = validateBestPracticesExercise(codeInput);
            break;
        case 'validation':
            isValid = validateValidationExercise(codeInput);
            break;
        case 'html5':
            isValid = validateHTML5Exercise(codeInput);
            break;
        case 'css-intro':
            isValid = validateCSSIntroExercise(codeInput);
            break;
        case 'css-selectors':
            isValid = validateSelectorsExercise(codeInput);
            break;
        case 'box-model':
            isValid = validateBoxModelExercise(codeInput);
            break;
        case 'colors-typography':
            isValid = validateColorsTypographyExercise(codeInput);
            break;
        case 'layout-positioning':
            isValid = validateLayoutPositioningExercise(codeInput);
            break;
        case 'flexbox':
            isValid = validateFlexboxExercise(codeInput);
            break;
        case 'grid':
            isValid = validateGridExercise(codeInput);
            break;
        case 'responsive':
            isValid = validateResponsiveExercise(codeInput);
            break;
        case 'animations':
            isValid = validateAnimationsExercise(codeInput);
            break;
        case 'variables':
            isValid = validateVariablesExercise(codeInput);
            break;
        case 'preprocessors':
            isValid = validatePreprocessorsExercise(codeInput);
            break;
        case 'modern-css':
            isValid = validateModernCSSExercise(codeInput);
            break;
        default:
            isValid = validateHTML(codeInput);
    }
    
    if (isValid) {
        showSuccess('Great job! Your code uses modern HTML5 features!');
    } else {
        showError('Try again! Make sure to include all required HTML5 features.');
    }
}

// Quiz functionality
function checkQuiz() {
    const selectedAnswer = document.querySelector('input[name="q1"]:checked');
    if (!selectedAnswer) {
        showError('Please select an answer!');
        return;
    }

    if (selectedAnswer.value === 'body') {
        showSuccess('Correct! The <body> element contains the visible content.');
    } else {
        showError('Try again! Think about which element shows the content.');
    }
}

// Helper functions
function showSuccess(message) {
    alert(message); // Replace with better UI feedback
}

function showError(message) {
    alert(message); // Replace with better UI feedback
}

function validateHTML(code) {
    // Basic HTML validation logic
    const requiredElements = [
        '<!DOCTYPE html>',
        '<html',
        '<head',
        '<title',
        '<body'
    ];

    return requiredElements.every(element => 
        code.toLowerCase().includes(element.toLowerCase())
    );
}

function validateAttributesExercise(code) {
    const requirements = [
        {
            feature: 'link with target="_blank"',
            regex: /<a[^>]+target="_blank"[^>]*>/i
        },
        {
            feature: 'image with alt and dimensions',
            regex: /<img[^>]+(alt=["'][^"']*["'])[^>]+(width|height)=/i
        },
        {
            feature: 'div with class and id',
            regex: /<div[^>]+(class=["'][^"']*["'])[^>]+(id=["'][^"']*["'])/i
        },
        {
            feature: 'input with placeholder',
            regex: /<input[^>]+placeholder=["'][^"']*["']/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing required elements: ${missing}`);
        return false;
    }

    return true;
}

function validateFormExercise(code) {
    const requirements = [
        {
            feature: 'form element',
            regex: /<form[^>]*>/i
        },
        {
            feature: 'text input for name',
            regex: /<input[^>]+type=["']text["'][^>]*(name|id)=["'].*name["'][^>]*>/i
        },
        {
            feature: 'email input',
            regex: /<input[^>]+type=["']email["'][^>]*>/i
        },
        {
            feature: 'password field',
            regex: /<input[^>]+type=["']password["'][^>]*>/i
        },
        {
            feature: 'radio buttons',
            regex: /<input[^>]+type=["']radio["'][^>]*>/i
        },
        {
            feature: 'checkboxes',
            regex: /<input[^>]+type=["']checkbox["'][^>]*>/i
        },
        {
            feature: 'submit button',
            regex: /<button[^>]+type=["']submit["'][^>]*>|<input[^>]+type=["']submit["'][^>]*>/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing required elements: ${missing}`);
        return false;
    }

    return true;
}

function validateTableExercise(code) {
    const requirements = [
        {
            feature: 'table element',
            regex: /<table[^>]*>/i
        },
        {
            feature: 'table headers (th)',
            regex: /<th[^>]*>[^<]*<\/th>/i
        },
        {
            feature: 'multiple rows (tr)',
            regex: /(<tr[^>]*>.*?<\/tr>.*?){3,}/is
        },
        {
            feature: 'spanning attribute (rowspan or colspan)',
            regex: /<[^>]+(rowspan|colspan)=/i
        },
        {
            feature: 'table footer (tfoot)',
            regex: /<tfoot[^>]*>.*?<\/tfoot>/is
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing required elements: ${missing}`);
        return false;
    }

    return true;
}

function validateSemanticExercise(code) {
    const requirements = [
        {
            feature: 'header element',
            regex: /<header[^>]*>.*?<\/header>/is
        },
        {
            feature: 'navigation',
            regex: /<nav[^>]*>.*?<\/nav>/is
        },
        {
            feature: 'main content area',
            regex: /<main[^>]*>.*?<\/main>/is
        },
        {
            feature: 'article element',
            regex: /<article[^>]*>.*?<\/article>/is
        },
        {
            feature: 'section with heading',
            regex: /<section[^>]*>.*?<h[1-6][^>]*>.*?<\/section>/is
        },
        {
            feature: 'aside element',
            regex: /<aside[^>]*>.*?<\/aside>/is
        },
        {
            feature: 'footer element',
            regex: /<footer[^>]*>.*?<\/footer>/is
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing required elements: ${missing}`);
        return false;
    }

    return true;
}

function validateMultimediaExercise(code) {
    const requirements = [
        {
            feature: 'picture element with sources',
            regex: /<picture>.*?<source[^>]+srcset=["'][^"']+["'].*?<\/picture>/is
        },
        {
            feature: 'video element with controls',
            regex: /<video[^>]+controls.*?>.*?<source[^>]+src=["'][^"']+["'].*?<\/video>/is
        },
        {
            feature: 'audio element',
            regex: /<audio[^>]*>.*?<source[^>]+src=["'][^"']+["'].*?<\/audio>/is
        },
        {
            feature: 'iframe for YouTube',
            regex: /<iframe[^>]+src=["'][^"']*youtube[^"']*["']/i
        },
        {
            feature: 'figure with caption',
            regex: /<figure>.*?<figcaption>.*?<\/figcaption>.*?<\/figure>/is
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing required elements: ${missing}`);
        return false;
    }

    return true;
}

function validateMetaTagsExercise(code) {
    const requirements = [
        {
            feature: 'charset meta tag',
            regex: /<meta[^>]+charset=["']UTF-8["'][^>]*>/i
        },
        {
            feature: 'viewport meta tag',
            regex: /<meta[^>]+name=["']viewport["'][^>]*content=["'][^"']*width=device-width[^"']*["'][^>]*>/i
        },
        {
            feature: 'description meta tag',
            regex: /<meta[^>]+name=["']description["'][^>]*content=["'][^"']+["'][^>]*>/i
        },
        {
            feature: 'Open Graph tags',
            regex: /<meta[^>]+property=["']og:[^"']+["'][^>]*>/i
        },
        {
            feature: 'Twitter Card tags',
            regex: /<meta[^>]+name=["']twitter:[^"']+["'][^>]*>/i
        },
        {
            feature: 'robots meta tag',
            regex: /<meta[^>]+name=["']robots["'][^>]*>/i
        },
        {
            feature: 'canonical link',
            regex: /<link[^>]+rel=["']canonical["'][^>]*>/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing required elements: ${missing}`);
        return false;
    }

    return true;
}

function validateAccessibilityExercise(code) {
    const requirements = [
        {
            feature: 'proper heading structure',
            regex: /<h1[^>]*>.*?<\/h1>.*?<h2[^>]*>.*?<\/h2>/is
        },
        {
            feature: 'image with alt text',
            regex: /<img[^>]+alt=["'][^"']+["'][^>]*>/i
        },
        {
            feature: 'form with labeled inputs',
            regex: /<label[^>]+for=["'][^"']+["'][^>]*>.*?<input[^>]+id=["']\1["'][^>]*>/is
        },
        {
            feature: 'ARIA landmarks',
            regex: /role=["'](banner|navigation|main|complementary)["']/i
        },
        {
            feature: 'skip navigation link',
            regex: /<a[^>]+class=["']skip-link["'][^>]*>.*?Skip.*?<\/a>/i
        },
        {
            feature: 'aria-label or aria-describedby',
            regex: /aria-(label|describedby)=["'][^"']+["']/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing required elements: ${missing}`);
        return false;
    }

    return true;
}

function validateBestPracticesExercise(code) {
    const requirements = [
        {
            feature: 'semantic navigation',
            regex: /<nav[^>]*>.*?<\/nav>/is
        },
        {
            feature: 'unordered list for navigation',
            regex: /<nav[^>]*>.*?<ul[^>]*>.*?<\/ul>.*?<\/nav>/is
        },
        {
            feature: 'proper image with alt text',
            regex: /<img[^>]+alt=["'][^"']+["'][^>]*>/i
        },
        {
            feature: 'semantic main content',
            regex: /<(main|article|section)[^>]*>.*?<\/(main|article|section)>/is
        },
        {
            feature: 'heading structure',
            regex: /<h[1-6][^>]*>.*?<\/h[1-6]>/i
        },
        {
            feature: 'no deprecated elements',
            regex: /(?!.*<(font|center|strike|marquee)[^>]*>).*$/is
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing required elements or using deprecated tags: ${missing}`);
        return false;
    }

    return true;
}

function validateValidationExercise(code) {
    const requirements = [
        {
            feature: 'proper DOCTYPE',
            regex: /<!DOCTYPE html>/i
        },
        {
            feature: 'properly closed tags',
            regex: /<[^>]+>.*?<\/[^>]+>/gs
        },
        {
            feature: 'quoted attribute values',
            regex: /\s+\w+="[^"]*"/g
        },
        {
            feature: 'proper nesting',
            regex: /(?!.*<(\w+)[^>]*>.*<\/(?!\1).*?>.*<\/\1>)/s
        },
        {
            feature: 'img with required attributes',
            regex: /<img[^>]+src="[^"]+"\s+alt="[^"]+"/i
        },
        {
            feature: 'valid link href',
            regex: /<a[^>]+href="[^"]+"/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Validation errors found: ${missing}`);
        return false;
    }

    return true;
}

function validateHTML5Exercise(code) {
    const requirements = [
        {
            feature: 'canvas element',
            regex: /<canvas[^>]*>.*?<\/canvas>/is
        },
        {
            feature: 'video with controls',
            regex: /<video[^>]*controls[^>]*>.*?<\/video>/is
        },
        {
            feature: 'HTML5 input types',
            regex: /<input[^>]+type=["'](email|date|range|search|color)["']/i
        },
        {
            feature: 'local storage usage',
            regex: /localStorage\.(setItem|getItem)/i
        },
        {
            feature: 'drag and drop attributes',
            regex: /(draggable=["']true["']|ondragstart|ondrop|ondragover)/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing HTML5 features: ${missing}`);
        return false;
    }

    return true;
}

function validateCSSIntroExercise(code) {
    const requirements = [
        {
            feature: 'external CSS link',
            regex: /<link[^>]+rel=["']stylesheet["'][^>]+href=/i
        },
        {
            feature: 'body styles',
            regex: /body\s*{[^}]*}/i
        },
        {
            feature: 'container class',
            regex: /\.container\s*{[^}]*}/i
        },
        {
            feature: 'header styles',
            regex: /(#header|\.header)\s*{[^}]*}/i
        },
        {
            feature: 'text formatting properties',
            regex: /(font-|color|text-|line-height)/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing CSS features: ${missing}`);
        return false;
    }

    return true;
}

function validateSelectorsExercise(code) {
    const requirements = [
        {
            feature: 'element selector',
            regex: /^[a-z]+\s*{[^}]*}/im
        },
        {
            feature: 'class selector',
            regex: /\.[a-z][a-z0-9_-]*\s*{[^}]*}/i
        },
        {
            feature: 'ID selector',
            regex: /#[a-z][a-z0-9_-]*\s*{[^}]*}/i
        },
        {
            feature: 'combinator',
            regex: /([a-z0-9_.#][a-z0-9_-]*\s*[>+~]\s*[a-z0-9_.#][a-z0-9_-]*|[a-z0-9_.#][a-z0-9_-]*\s+[a-z0-9_.#][a-z0-9_-]*)\s*{[^}]*}/i
        },
        {
            feature: 'attribute selector',
            regex: /\[[^\]]+\]\s*{[^}]*}/
        },
        {
            feature: 'pseudo-class or pseudo-element',
            regex: /:[a-z-]+(\([^)]*\))?\s*{[^}]*}/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing selector types: ${missing}`);
        return false;
    }

    return true;
}

function validateBoxModelExercise(code) {
    const requirements = [
        {
            feature: 'width and height',
            regex: /(width|height):\s*\d+(px|em|rem|%)/i
        },
        {
            feature: 'padding',
            regex: /padding(-[a-z]+)?:\s*\d+(px|em|rem|%)/i
        },
        {
            feature: 'border with border-radius',
            regex: /border(-[a-z]+)?:\s*.*;\s*.*border-radius:\s*\d+(px|em|rem|%)/is
        },
        {
            feature: 'margin',
            regex: /margin(-[a-z]+)?:\s*\d+(px|em|rem|%)/i
        },
        {
            feature: 'box-shadow',
            regex: /box-shadow:\s*[^;]+;/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing box model properties: ${missing}`);
        return false;
    }

    return true;
}

function validateColorsTypographyExercise(code) {
    const requirements = [
        {
            feature: 'hex color',
            regex: /#[0-9a-f]{3,6}\b/i
        },
        {
            feature: 'rgb/rgba color',
            regex: /rgb(a)?\s*\([^)]+\)/i
        },
        {
            feature: 'hsl/hsla color',
            regex: /hsl(a)?\s*\([^)]+\)/i
        },
        {
            feature: 'font-family with fallbacks',
            regex: /font-family:\s*[^;]+,\s*[^;]+;/i
        },
        {
            feature: 'text properties',
            regex: /(text-align|text-decoration|text-transform):\s*[^;]+;/i
        },
        {
            feature: 'spacing properties',
            regex: /(line-height|letter-spacing|word-spacing):\s*[^;]+;/i
        },
        {
            feature: 'text effects',
            regex: /(text-shadow|background-clip|gradient).*?;/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing color/typography features: ${missing}`);
        return false;
    }

    return true;
}

function validateLayoutPositioningExercise(code) {
    const requirements = [
        {
            feature: 'fixed header',
            regex: /position:\s*fixed;.*?top:\s*0;?/is
        },
        {
            feature: 'centered container',
            regex: /(margin:\s*0\s+auto|left:\s*50%.*?transform:\s*translate)/is
        },
        {
            feature: 'floated columns',
            regex: /float:\s*(left|right)/i
        },
        {
            feature: 'absolute positioning',
            regex: /position:\s*absolute/i
        },
        {
            feature: 'z-index usage',
            regex: /z-index:\s*\d+/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing layout features: ${missing}`);
        return false;
    }

    return true;
}

function validateFlexboxExercise(code) {
    const requirements = [
        {
            feature: 'flex container',
            regex: /display:\s*flex\b/i
        },
        {
            feature: 'justify-content property',
            regex: /justify-content:\s*(flex-start|flex-end|center|space-between|space-around|space-evenly)/i
        },
        {
            feature: 'align-items property',
            regex: /align-items:\s*(flex-start|flex-end|center|baseline|stretch)/i
        },
        {
            feature: 'flex-grow usage',
            regex: /flex-grow:\s*[1-9][0-9]*/i
        },
        {
            feature: 'order property',
            regex: /order:\s*-?[0-9]+/i
        },
        {
            feature: 'flex-wrap property',
            regex: /flex-wrap:\s*(wrap|wrap-reverse)/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing flexbox features: ${missing}`);
        return false;
    }

    return true;
}

function validateGridExercise(code) {
    const requirements = [
        {
            feature: 'grid container',
            regex: /display:\s*grid\b/i
        },
        {
            feature: 'responsive grid with auto-fit',
            regex: /grid-template-columns:\s*repeat\s*\(\s*auto-fit\s*,\s*minmax\([^)]+\)\s*\)/i
        },
        {
            feature: 'grid-template-areas',
            regex: /grid-template-areas:\s*["\s][^"]+["]/i
        },
        {
            feature: 'grid item span',
            regex: /grid-(column|row):\s*([1-9][0-9]*\s*\/\s*[1-9][0-9]*|span\s*[1-9][0-9]*)/i
        },
        {
            feature: 'grid alignment',
            regex: /(justify|align)-(items|content|self):\s*(start|end|center|stretch|space-between|space-around)/i
        },
        {
            feature: 'grid gap',
            regex: /(gap|grid-gap|row-gap|column-gap):\s*[^;]+;/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing grid features: ${missing}`);
        return false;
    }

    return true;
}

function validateResponsiveExercise(code) {
    const requirements = [
        {
            feature: 'media queries',
            regex: /@media\s+screen\s+and\s*\([^)]+\)\s*{[^}]+}/i
        },
        {
            feature: 'fluid typography',
            regex: /font-size:\s*calc\([^)]+vw[^)]*\)/i
        },
        {
            feature: 'responsive images',
            regex: /max-width:\s*100%;\s*height:\s*auto/i
        },
        {
            feature: 'flexible layout',
            regex: /(display:\s*(grid|flex).*?repeat\(auto-fit|flex-wrap:\s*wrap)/is
        },
        {
            feature: 'responsive navigation',
            regex: /@media[^{]*{[^}]*nav[^}]*display:\s*(none|block|flex)/is
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing responsive features: ${missing}`);
        return false;
    }

    return true;
}

function validateAnimationsExercise(code) {
    const requirements = [
        {
            feature: 'transition with multiple properties',
            regex: /transition:\s*[^;]*,\s*[^;]*;/i
        },
        {
            feature: 'keyframe animation',
            regex: /@keyframes\s+[a-z][a-z0-9_-]*\s*{[^}]*}/i
        },
        {
            feature: 'transform combination',
            regex: /transform:\s*[^;]*\s+[^;]*;/i
        },
        {
            feature: 'timing function',
            regex: /timing-function:\s*(ease|linear|ease-in|ease-out|ease-in-out|cubic-bezier)/i
        },
        {
            feature: 'animation delay',
            regex: /animation(-delay)?:\s*[^;]*\d+s[^;]*;/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing animation features: ${missing}`);
        return false;
    }

    return true;
}

function validateVariablesExercise(code) {
    const requirements = [
        {
            feature: 'root variable declarations',
            regex: /:root\s*{[^}]*--[a-z-]+:\s*[^;]+;/i
        },
        {
            feature: 'typography variables with calc',
            regex: /--[a-z-]*(font|text|line)[^;]*;\s*.*?calc\s*\([^)]*var\s*\(--[^)]+\)/is
        },
        {
            feature: 'spacing system variables',
            regex: /--spacing[^;]*;\s*.*?var\s*\(--spacing[^)]+\)/is
        },
        {
            feature: 'theme variation',
            regex: /\.(light|dark)-theme\s*{[^}]*--[a-z-]+:/i
        },
        {
            feature: 'variable fallback',
            regex: /var\s*\([^,]+,\s*[^)]+\)/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing CSS variable features: ${missing}`);
        return false;
    }

    return true;
}

function validatePreprocessorsExercise(code) {
    const requirements = [
        {
            feature: 'variables and nesting',
            regex: /\$[a-z-_]+:.+;\s*[^{]+{\s*[^}]+{\s*[^}]+}/is
        },
        {
            feature: 'mixin with parameters',
            regex: /@mixin\s+[a-z-_]+\s*\([^\)]+\)\s*{[^}]+}/i
        },
        {
            feature: 'extended placeholder',
            regex: /%[a-z-_]+\s*{[^}]+}.*?@extend\s+%[a-z-_]+/is
        },
        {
            feature: 'control directive',
            regex: /@(for|each|while)\s+[^{]+{[^}]+}/i
        },
        {
            feature: 'color function',
            regex: /(lighten|darken|mix|adjust-hue)\s*\([^)]+\)/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing SCSS features: ${missing}`);
        return false;
    }

    return true;
}

function validateModernCSSExercise(code) {
    const requirements = [
        {
            feature: 'container queries',
            regex: /@container\s+[^{]+{[^}]+}/i
        },
        {
            feature: 'logical properties',
            regex: /(margin|padding|border)-(block|inline)(-start|-end)?:/i
        },
        {
            feature: 'modern selector',
            regex: /:[a-z-]+\([^)]+\)|:has\([^)]+\)/i
        },
        {
            feature: 'modern color feature',
            regex: /(color-mix|color\(|from)/i
        },
        {
            feature: 'advanced layout',
            regex: /(subgrid|masonry|content-visibility|aspect-ratio):/i
        }
    ];

    const results = requirements.map(req => ({
        feature: req.feature,
        passed: req.regex.test(code)
    }));

    const allPassed = results.every(r => r.passed);
    
    if (!allPassed) {
        const missing = results
            .filter(r => !r.passed)
            .map(r => r.feature)
            .join(', ');
        showError(`Missing modern CSS features: ${missing}`);
        return false;
    }

    return true;
}