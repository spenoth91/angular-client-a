export class APIEndpointURLs {
  private static readonly baseUrl = '/java-api/api';

  // User
  public static readonly userUrl = APIEndpointURLs.baseUrl + '/user';
  public static readonly allUser = APIEndpointURLs.userUrl + '/all';
  public static readonly foodUrl = APIEndpointURLs.baseUrl + '/food';
  public static readonly user = APIEndpointURLs.userUrl + '/id/';

  // Auth
  public static readonly authUrl = APIEndpointURLs.baseUrl + '/auth';
  public static readonly loginUrl = APIEndpointURLs.authUrl + '/login';
  public static readonly profile = APIEndpointURLs.authUrl + '/profile';
  public static readonly cartUrl = APIEndpointURLs.baseUrl + '/cart';

}
