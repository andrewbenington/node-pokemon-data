VERSION=0.2.0

.PHONY: build
build:
	@npm run build

.PHONY: cov
cov:
	@npm run cov

.PHONY: lint
lint:
	@npm run lint

.PHONY: set-version
set-version:
	@npm version $(VERSION) --no-git-tag-version --allow-same-version

generate/typescript/out/typescript/generate.js:
	@echo "compiling generate/typescript/*.ts..."
	@cd generate/typescript && npx tsc

.PHONY: generate
generate: generate/typescript/out/typescript/generate.js
	@echo "generating typescript..."
	@ts-node ./generate/typescript/generate.ts
	@npx prettier --log-level error --write  "{,!(node_modules)/**/}*.ts"

generate/out/syncPKHexResources.js: generate/syncPKHexResources.ts
	@echo "compiling generate/syncPKHexResources.ts..."
	@cd generate && tsc

.PHONY: sync-resources
sync-resources: generate/out
	@echo "syncing PKHex resources..."
	@ts-node --lib es7 ./generate/syncPKHexResources.ts
	@echo "syncing finished"
