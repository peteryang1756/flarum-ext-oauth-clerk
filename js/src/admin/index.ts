import app from 'flarum/admin/app';
import { ConfigureWithOAuthPage } from '@fof-oauth';

app.initializers.add('ssangyongsports/logto, () => {
  app.extensionData.for('ssangyongsports-oauth-logto').registerPage(ConfigureWithOAuthPage);
});
