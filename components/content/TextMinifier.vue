<template>
    <div class="text-minifier">
      <h2 class="text-minifier__title">Text Minifier</h2>
      
      <div class="text-minifier__input">
        <label for="input-text">Input Text</label>
        <textarea
          id="input-text"
          v-model="inputText"
          placeholder="Paste your text here..."
        ></textarea>
      </div>
  
      <div class="text-minifier__options">
        <div class="switch-group">
          <label class="switch" title="Removes all spaces, tabs, and newlines">
            <input type="checkbox" v-model="options.removeAllWhitespace">
            <span class="slider"></span>
            <span class="switch-label">Remove all whitespace</span>
          </label>
          <label class="switch" title="Removes all comments (// and /* */)" :class="{ disabled: options.removeAllWhitespace }">
            <input type="checkbox" v-model="options.removeComments" :disabled="options.removeAllWhitespace">
            <span class="slider"></span>
            <span class="switch-label">Remove comments</span>
          </label>
          <label class="switch" title="Keeps minimal whitespace for readability" :class="{ disabled: options.removeAllWhitespace }">
            <input type="checkbox" v-model="options.preserveStructure" :disabled="options.removeAllWhitespace">
            <span class="slider"></span>
            <span class="switch-label">Preserve structure</span>
          </label>
        </div>
      </div>
  
      <button @click="minifyText" class="text-minifier__button">
        Minify Text
      </button>
  
      <div class="text-minifier__output">
        <label for="output-text">Minified Output</label>
        <textarea
          id="output-text"
          v-model="outputText"
          readonly
          placeholder="Minified text will appear here..."
        ></textarea>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, watch } from 'vue'
  
  const inputText = ref('')
  const outputText = ref('')
  const options = reactive({
    removeAllWhitespace: false,
    removeComments: false,
    preserveStructure: false,
  })
  
  watch(() => options.removeAllWhitespace, (newValue) => {
    if (newValue) {
      options.removeComments = false
      options.preserveStructure = false
    }
  })
  
  const minifyText = () => {
    let minified = inputText.value
  
    if (options.removeComments) {
      minified = minified.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '')
    }
  
    if (options.removeAllWhitespace) {
      minified = minified.replace(/\s+/g, '')
    } else if (options.preserveStructure) {
      minified = minified.replace(/[ \t]+/g, ' ')
                         .replace(/\n+/g, '\n')
                         .trim()
    }
  
    outputText.value = minified
  }
  </script>
  
  
  <style scoped>
  .text-minifier {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background: #1a1a1a;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    color: #e0e0e0;
  }
  
  .text-minifier__title {
    text-align: center;
    color: #4db6ac;
    margin-bottom: 2rem;
  }
  
  .text-minifier__input,
  .text-minifier__output {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #b0bec5;
  }
  
  textarea {
    width: 100%;
    height: 150px;
    padding: 0.5rem;
    border: 1px solid #424242;
    border-radius: 4px;
    resize: vertical;
    background-color: #212121;
    color: #e0e0e0;
  }
  
  .text-minifier__options {
    margin-bottom: 1.5rem;
  }
  
  .switch-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 50px;
    height: 24px;
    background-color: #424242;
    transition: .4s;
    border-radius: 34px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: #e0e0e0;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: #4db6ac;
  }
  
  input:checked + .slider:before {
    transform: translateX(26px);
  }
  
  .switch-label {
    margin-left: 60px;
  }
  
  .text-minifier__button {
    display: block;
    width: 100%;
    padding: 0.75rem;
    background-color: #4db6ac;
    color: #212121;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .text-minifier__button:hover {
    background-color: #26a69a;
  }
  
  /* Tooltip styles */
  .switch[title] {
    position: relative;
  }
  
  .switch[title]:hover::after {
    content: attr(title);
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    z-index: 1;
    margin-left: 10px;
  }

  .switch.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .switch.disabled input {
    cursor: not-allowed;
  }
  
  .switch.disabled .slider {
    background-color: #666;
  }
  
  .switch.disabled .switch-label {
    color: #666;
  }
  </style>