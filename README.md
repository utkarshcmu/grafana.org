# Grafana.org website


## To build

- npm install
- npm install -g bower  (if you do not have bower installed)
- bower install
- install hugo (Static site gen):

```bash
curl -sSL https://github.com/gohugoio/hugo/releases/download/v0.30.2/hugo_0.30.2_Linux-64bit.tar.gz \
	| sudo tar -v -C /usr/local/bin -xz \
  && sudo chmod 755 /usr/local/bin/hugo \
  && /usr/local/bin/hugo version
```

macOS
```bash
curl -sSL https://github.com/gohugoio/hugo/releases/download/v0.30.2/hugo_0.30.2_macOS-64bit.tar.gz \
	| sudo tar -v -C /usr/local/bin -xz \
  && sudo chmod 755 /usr/local/bin/hugo \
  && /usr/local/bin/hugo version
```
- grunt : default grunt tasks builds dev build (needed at least first time)
- grunt connect: starts dev web server on port 3002 (must always be running to be able to run blog locally)
- grunt watch: will do partial rebuild when modifying sass/html/md files

## To build the Docker image for docs:

make docs-build

## To publish

```bash
sudo pip install awscli
```

You'll need a awsconfig as well. Ask and you should find.

### To staging

```bash
./publish.sh
```

### To production

```bash
./publish.sh prod
```
