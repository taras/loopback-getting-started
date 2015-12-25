TESTS = test/*.js
REPORTER = spec

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require ./test/bootstrap \
		--reporter $(REPORTER) \
		$(TESTS)

test-debug:
	@NODE_ENV=test ./node_modules/.bin/mocha \
    --debug \
		--require ./test/bootstrap \
		--reporter $(REPORTER) \
		$(TESTS)

.PHONY: test test-debug