ZIP=../dist.zip
SRC=Chrome

all:
	cd Source.app && \
	zip -r $(ZIP) Chrome

