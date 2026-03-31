// Modal Component - Handles modal functionality

/**
 * Modal class for managing modal dialogs
 */
export class Modal {
    constructor(options = {}) {
        this.overlay = null;
        this.modal = null;
        this.isOpen = false;
        this.options = {
            closeOnOverlay: true,
            closeOnEsc: true,
            ...options
        };
    }
    
    /**
     * Open modal with content
     * @param {string} content - HTML content for the modal
     */
    open(content) {
        if (this.isOpen) return;
        
        this.createModal(content);
        document.body.appendChild(this.overlay);
        document.body.style.overflow = 'hidden';
        this.isOpen = true;
        
        this.addEventListeners();
    }
    
    /**
     * Close the modal
     */
    close() {
        if (!this.isOpen) return;
        
        this.removeEventListeners();
        document.body.removeChild(this.overlay);
        document.body.style.overflow = '';
        this.isOpen = false;
        this.overlay = null;
        this.modal = null;
    }
    
    /**
     * Create modal DOM elements
     * @param {string} content - HTML content
     */
    createModal(content) {
        this.overlay = document.createElement('div');
        this.overlay.className = 'modal-overlay';
        this.overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        `;
        
        this.modal = document.createElement('div');
        this.modal.className = 'modal-content';
        this.modal.style.cssText = `
            background: #1e293b;
            padding: 2rem;
            border-radius: 16px;
            max-width: 600px;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
        `;
        this.modal.innerHTML = content;
        
        const closeButton = document.createElement('button');
        closeButton.className = 'modal-close';
        closeButton.innerHTML = '&times;';
        closeButton.style.cssText = `
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 1.5rem;
            background: none;
            border: none;
            color: #f8fafc;
            cursor: pointer;
        `;
        
        this.modal.appendChild(closeButton);
        this.overlay.appendChild(this.modal);
    }
    
    /**
     * Add event listeners
     */
    addEventListeners() {
        const closeButton = this.modal.querySelector('.modal-close');
        if (closeButton) {
            closeButton.addEventListener('click', () => this.close());
        }
        
        if (this.options.closeOnOverlay) {
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) {
                    this.close();
                }
            });
        }
        
        if (this.options.closeOnEsc) {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.close();
                }
            });
        }
    }
    
    /**
     * Remove event listeners
     */
    removeEventListeners() {
        // Cleanup is handled by removing the overlay
    }
}
