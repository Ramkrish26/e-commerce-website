##
#
###

.DEFAULT_GOAL:=explain
.PHONY: explain
explain:
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

###
##@ Cleanup
###
.PHONY: clean
clean: ## Clean non-version controlled directories
	@echo "- Cleaning the repo..."
	rm -rf ./**/*/bin
	rm -rf ./**/*/obj
	rm -fr ./build && mkdir -p ./build/trivy
	rm -rf ./node_modules
	git clean -fX || true
	@echo "✔ Done"

###
##@ Installing
###

.PHONY: install-npm
install-npm: ## Install npm dependencies
	@echo "- Installing NPM packages..."
ifeq ($(CI),true)
	npm ci
else
	npm install
	npm run husky-prep
endif
	@echo "✔ Done"

###
##@ Validation
###

.PHONY: spellcheck-markdown
spellcheck-markdown: ## Spell checking Markdown file
	@echo "- Spellcheck files..."
	npm run md-spellcheck
	@echo "✔ Done"

.PHONY: lint-markdown
lint-markdown: ## Lint the Markdown files
	@echo "- Linting Markdown files..."
	npm run md-lint
	@echo "✔ Done"

.PHONY: editorconfig-check
editorconfig-check: ## Run the config check
	@echo "- Checking EditorConfig files..."
	npm run eclint-check
	@echo "✔ Done"

.PHONY: editorconfig-fix
editorconfig-fix:
	@echo "- Fixing EditorConfig files..."
	npm run eclint-fix
	@echo "✔ Done"
