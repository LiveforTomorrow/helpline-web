module.exports = {
    webpack: (config, { webpack }) => {
        config.plugins.push(new webpack.IgnorePlugin(/\/__generated__\//));
        return config;
    },
};
